status=$(git status | grep -i modified)
if [ -z "$status" ]
then
    echo "Docs are up to date"
    exit 0
else
    echo "Docs are not up to date"
    exit 1
fi