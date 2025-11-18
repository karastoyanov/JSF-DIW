for f in b_*.js; do
    num=$(echo "$f" | sed -E 's/^b_([0-9]+)\.js$/\1/')
    mv "$f" "BASICS02-$num.js"
done
