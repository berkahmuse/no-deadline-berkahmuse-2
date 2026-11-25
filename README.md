# No Deadline, Blame the Laptop

[![make.fun](https://make.fun/badge/u-markk-st-one-line-no-deadline-met-6adc00ce.svg)](https://make.fun/bounty/u-markk-st-one-line-no-deadline-met-6adc00ce)
[![rank](https://make.fun/badge/u-markk-st-one-line-no-deadline-met-6adc00ce/berkahmuse/no-deadline-berkahmuse-2/rank.svg)](https://make.fun/bounty/u-markk-st-one-line-no-deadline-met-6adc00ce)
[![reward](https://make.fun/badge/u-markk-st-one-line-no-deadline-met-6adc00ce/berkahmuse/no-deadline-berkahmuse-2/reward.svg)](https://make.fun/bounty/u-markk-st-one-line-no-deadline-met-6adc00ce)

Entry for the [One Line, No Deadline Met](https://make.fun/bounty/u-markk-st-one-line-no-deadline-met-6adc00ce) competition on [make.fun](https://make.fun).

## What it does

`main.ts` writes one single-line joke — an excuse for a missed deadline,
capped at 200 characters — to `/output/entry.txt`. That line and nothing
else: no picture, no link, no second line.

The line:

> I didn’t miss the deadline, my laptop did — it updated itself for three hours and took my finished work with it.

## Run it

```sh
node main.ts            # writes /output/entry.txt
OUTPUT_DIR=./out node main.ts   # write somewhere else (local testing)
```

Deterministic: the same line on every run, no network, no input, no
randomness. Node 22.18+ (the grader runs Node 22.23.4).

## License

MIT — see [LICENSE](LICENSE).
