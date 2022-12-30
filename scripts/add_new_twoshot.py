from __future__ import annotations

import json
import re
import subprocess
from collections import defaultdict
from dataclasses import dataclass
from pathlib import Path

import gtfu
import pyperclip

ASSETS_PATH = Path("src") / "assets"
ONES_JSON = ASSETS_PATH / "ones.json"
RAW_JSON = ASSETS_PATH / "raw.json"
TOPICS_JSON = ASSETS_PATH / "topics.json"


@dataclass
class Item:
    title: str
    videoId: str
    id: int


raw_json_str = RAW_JSON.read_text()
items = [Item(**d) for d in json.loads(raw_json_str)]

new_videoId = input("? videoId: ")
url = "https://www.youtube.com/watch?v=" + new_videoId
new_title = gtfu.get(url).removesuffix(" - YouTube")
items.append(Item(videoId=new_videoId, title=new_title, id=len(items)))

raw_list: list[dict[str, str | int]] = []
ones_dict: defaultdict[str, list[int]] = defaultdict(list)
topics_dict: defaultdict[str, list[int]] = defaultdict(list)


for item in items:
    if item.id <= 171:
        m = re.match(r"【作業用トーク】TWOSHOT #\d+ (.+)【(.+)】", item.title)
    else:
        m = re.match(r"【作業用トーク】(.+)【(.+)】", item.title)
    assert m is not None

    ones_dict[m.group(2).removesuffix("さん")].append(item.id)

    raw_list.append({"id": item.id, "title": item.title, "videoId": item.videoId})

    for topic in sorted(set(m.group(1).split("/"))):
        topics_dict[topic].append(item.id)


ones_list = [{"name": k, "mainIds": v} for k, v in ones_dict.items()]
topics_list = [{"name": k, "mainIds": v} for k, v in topics_dict.items()]

ONES_JSON.write_text(json.dumps(ones_list, ensure_ascii=False))
RAW_JSON.write_text(json.dumps(raw_list, ensure_ascii=False))
TOPICS_JSON.write_text(json.dumps(topics_list, ensure_ascii=False))


command = "pnpm run prettier:write"
subprocess.run(command.split(), check=True)


command = "git add " + str(ASSETS_PATH)
subprocess.run(command.split(), check=True)


text = f"Add TWOSHOT {items[-1].id}"
pyperclip.copy(text)  # type: ignore
print("クリップボードにコミットメッセージをコピーしました:")
print(text)
