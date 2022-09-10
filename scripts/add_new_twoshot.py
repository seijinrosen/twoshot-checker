from __future__ import annotations

import json
import re
from collections import defaultdict
from dataclasses import dataclass
from pathlib import Path

import gtfu
import pyperclip


@dataclass
class Item:
    title: str
    videoId: str
    id: int = 1000


raw_json_str = Path("src/assets/raw.json").read_text()
items = [Item(**d) for d in json.loads(raw_json_str)]

new_videoId = input("? videoId: ")
url = "https://www.youtube.com/watch?v=" + new_videoId
new_title = gtfu.get(url).removesuffix(" - YouTube")
items.append(Item(videoId=new_videoId, title=new_title))

raw_list: list[dict[str, str | int]] = []
ones_dict: defaultdict[str, list[int]] = defaultdict(list)
topics_dict: defaultdict[str, list[int]] = defaultdict(list)


for item in items:
    m = re.match(r"【作業用トーク】TWOSHOT #(\d+) (.+)【(.+)】", item.title)
    assert m is not None

    if item.id == 1000:
        item.id = int(m.group(1))

    ones_dict[m.group(3).removesuffix("さん")].append(item.id)

    raw_list.append({"id": item.id, "title": item.title, "videoId": item.videoId})

    for topic in sorted(set(m.group(2).split("/"))):
        topics_dict[topic].append(item.id)


ones_list = [{"name": k, "mainIds": v} for k, v in ones_dict.items()]
topics_list = [{"name": k, "mainIds": v} for k, v in topics_dict.items()]

Path("src/assets/ones.json").write_text(json.dumps(ones_list, ensure_ascii=False))
Path("src/assets/raw.json").write_text(json.dumps(raw_list, ensure_ascii=False))
Path("src/assets/topics.json").write_text(json.dumps(topics_list, ensure_ascii=False))

text = f"Add TWOSHOT {items[-1].id}"
pyperclip.copy(text)  # type: ignore
print("クリップボードにコミットメッセージをコピーしました:")
print(text)