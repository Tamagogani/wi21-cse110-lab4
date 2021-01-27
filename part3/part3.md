# Part 3: Debugging
## .js
The `printSum` function was reading string fields and passing those strings to the
`calculateSum` function. The fix is to `parseInt` the strings before passing
them to `calculateSum`.

- **Breakpoints** shown in ***bp.png***
- **watch expressions** shown in ***watch.png***
- **Fixed Code** shown in ***fix.png***

## Networking
1. citylots.json
2. part2.js (line 2)
3. 11.7 MB
4. 1.41 seconds
5. Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.96 Safari/537.36
6. Apache
7. Tue, 26 Jan 2021 22:14:13 GMT
8. application/json
9. fetchData()
