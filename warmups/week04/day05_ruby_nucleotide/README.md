# Nucleotide Count

DNA is represented by an alphabet of the following symbols: 'A', 'C', 'G', and 'T'.

Each symbol represents a nucleotide, which is a fancy name for the particular molecules that happen to make up a large part of DNA.

Write a program in ruby that will tell you how many times each nucleotide occurs in a string (i.e. how many times 'A', 'C', 'G' and 'T' appear in a given string).

It should also tell you if a character in the string is _not_ a valid nucleotide (i.e. NOT 'A', 'C', 'G', and 'T').

Example:

```ruby
count_nucleotides "AGCTTTTCATTCTGACTGCAACGGGCAATATGTCTCTGTGTGGATTAAAAAAAGAGTGTCTGATAGCAGC"
# output:
A: 20
C: 12
G: 17
T: 21
```

## Source
The _Calculating DNA Nucleotides_ problem at [Rosalind](http://rosalind.info/problems/dna/)
