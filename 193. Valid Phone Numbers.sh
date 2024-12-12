# Accepted
# Runtime: 63 ms, faster than 69.64%
# Memory Usage: 3.51 MB, less than 14.11%
# Read from the file file.txt and output all valid phone numbers to stdout.
grep -P '^(\([0-9]{3}\) [0-9]{3}-[0-9]{4}|[0-9]{3}-{1}[0-9]{3}-[0-9]{4})$' file.txt