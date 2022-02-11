.PHONY: dist
default: help

install:
	npm i --registry=https://registry.npmmirror.com --ignore-scripts

dev: install
	npm run dev

deploy:
	npm run deploy

pub: install
	npm run pub

help:
	@echo "   \033[35mmake\033[0m \033[1m命令使用说明\033[0m"
	@echo "   \033[35mmake install\033[0m\t\033[0m\t---  安装依赖"
	@echo "   \033[35mmake dev\033[0m\t\033[0m\t---  开发模式"
	@echo "   \033[35mmake deploy\033[0m\t\033[0m\t---  部署 demo"
	@echo "   \033[35mmake pub\033[0m\t\033[0m\t---  发布到 npm 上"
