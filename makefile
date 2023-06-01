dynamo-proxy:
	sudo python3 .scripts/dynamo_proxy.py

dynamo-install:
	sls dynamodb install

dynamo-start:
	sls dynamodb start

dev:
	npm run dev

deploy:
	npm run deploy