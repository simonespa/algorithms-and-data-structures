# Sorting algorithms

The assumptions is that the algorithms will be sorting numeric arrays.

## Classification

Sorting algorithms can be classified by:

- Computational complexity
  Best, worst and average case behavior in terms of the size of the list. For typical serial sorting algorithms, good behavior is O(n log n), with parallel sort in O(log2 n), and bad behavior is O(n2). Ideal behavior for a serial sort is O(n), but this is not possible in the average case. Optimal parallel sorting is O(log n).
  Swaps for "in-place" algorithms.
- Memory complexity. In particular, some sorting algorithms are "in-place". Strictly, an in-place sort needs only O(1) memory beyond the items being sorted; sometimes O(log n) additional memory is considered "in-place".
- Recursion: Some algorithms are either recursive or non-recursive, while others may be both (e.g., merge sort).
- Stability: stable sorting algorithms maintain the relative order of records with equal keys (i.e., values).
- Whether or not they are a comparison sort. A comparison sort examines the data only by comparing two elements with a comparison operator.
- General method: insertion, exchange, selection, merging, etc. Exchange sorts include bubble sort and quicksort. Selection sorts include cycle sort and heapsort.
- Whether the algorithm is serial or parallel. The remainder of this discussion almost exclusively concentrates upon serial algorithms and assumes serial operation.
- Adaptability: Whether or not the presortedness of the input affects the running time. Algorithms that take this into account are known to be adaptive.
- Online: An algorithm such as Insertion Sort that is online can sort a constant stream of input.
