deploy:
	yarn build
	git add dist
	git commit -m "update dist for deployment"
	git push origin -f
	git subtree push --prefix dist origin gh-pages