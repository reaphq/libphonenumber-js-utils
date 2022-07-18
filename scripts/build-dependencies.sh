# Note: update to versions came from https://github.com/google/libphonenumber/pull/2702

rm -rf libphonenumber
git clone --branch v`cat package.json | python -c "import sys, json; print(json.load(sys.stdin)['googleLibphonenumberVersion'])"` https://github.com/googlei18n/libphonenumber/

if [ ! -d ./closure-library/.git ]; then
    rm -rf closure-library
    git clone --branch v20201006 https://github.com/google/closure-library/
fi

if [ ! -f ./closure-compiler/bazel-bin/compiler_unshaded_deploy.jar ]; then
    git clone https://github.com/google/closure-compiler.git
    cd closure-compiler
    # yarn build
    bazelisk build //:compiler_unshaded_deploy.jar
    cd ..
fi

if [ ! -d ./closure-linter/.git ]; then
    rm -rf closure-linter
    git clone --branch v2.3.19 https://github.com/google/closure-linter.git
fi

if [ ! -d ./python-gflags/.git ]; then
    git clone -b 3.1.2 https://github.com/google/python-gflags.git
fi