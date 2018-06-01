Challenge Q 1:

Given a list of SORTED non-overlapping intervals, insert a new interval into
that list merging them as needed.
Interval = tuple<int, int> or start-time & end-time.

Examples:
Given intervals [1,5], [8,9] insert and merge [6,7] would result in [1,5], [6,7], [8,9].
Given intervals [1,5], [8,9] insert and merge [2,3] would result in [1,5], [8,9].
Given intervals [1,5], [8,9] insert and merge [6,8] would result in [1,5], [6,9].

//input: array of interval(object: s)


function Interval(start, end) {
    this.start = start;
    this.end = end;
};
