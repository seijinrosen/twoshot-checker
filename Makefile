dev:
	pnpm run dev

switch:
	git switch --create develop

update:
	pnpm update

init:
	pnpm install

clean:
	rm -r node_modules/
	rm -r dist/
