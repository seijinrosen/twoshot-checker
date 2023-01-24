dev:
	pnpm run dev

git-reset:
	git reset --soft HEAD^

switch:
	git switch --create develop

after-develop-merged:
	git switch main
	git pull --prune
	git branch --delete develop
	git switch --create develop

update:
	pnpm update

init:
	pnpm install

clean:
	rm -r node_modules/
	rm -r dist/
