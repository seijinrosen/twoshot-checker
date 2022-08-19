dev:
	pnpm run dev

switch:
	git switch --create develop

after-develop-merged:
	git switch main
	git pull --prune
	git branch --delete develop
	make switch

update:
	pnpm update

init:
	pnpm install

clean:
	rm -r node_modules/
	rm -r dist/
