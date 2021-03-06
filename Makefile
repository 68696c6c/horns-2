IMAGE_NAME ?= horns
BUILD_TAG ?= latest

.PHONY: test

.DEFAULT:
	@echo 'Invalid target.'
	@echo
	@echo '    image         build the Docker image'
	@echo '    deps          install dependancies using Yarn'
	@echo '    publish       publish the project to NPM'
	@echo '    local         spin up local development environment'
	@echo '    local-down    tear down local environment'
	@echo '    test          run unit tests'
	@echo '    test-watch    run the unit test watcher'
	@echo '    states        generate USMap State components using horns-cli'
	@echo '    colors        print color options using the make-color-options script. Supports DEPTH argument.'
	@echo

default: .DEFAULT

image:
	docker build . -t $(IMAGE_NAME):$(BUILD_TAG)

deps:
	docker-compose run --rm app yarn

# Increment the minor version and publish to NPM.
publish:
	docker-compose run --rm app bash -c "./increment-version.sh && yarn build && npm publish"

local: local-down
	NETWORK_NAME="$(NETWORK_NAME)" docker-compose up

local-down:
	NETWORK_NAME="$(NETWORK_NAME)" docker-compose down

test:
	docker-compose run --rm app yarn test

test-watch:
	docker-compose run --rm app yarn test:watch

lint:
	docker-compose run --rm app eslint src/**

states:
	./horns gen:states "src/components/visuals/us-map"

# e.g. make colors DEPTH=shades will print color shades.  DEPTH willl default to swatches
colors:
	docker-compose run --rm app node make-color-options.js $(DEPTH)
