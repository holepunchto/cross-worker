#!/usr/bin/env python

import os
import sys
import signal
from time import sleep
import polars as pl
import datetime as dt

def pipe():
    def signal_handler(signum, frame):
        sys.exit(0)

    signal.signal(signal.SIGTERM, signal_handler)
    signal.signal(signal.SIGINT, signal_handler)

    # One way, but useful to test
    out = os.fdopen(3, mode='wb', buffering=0)
    sleep(1)

    return out

out = pipe()

df = pl.DataFrame(
    {
        "name": ["Alice Archer", "Ben Brown", "Chloe Cooper", "Daniel Donovan"],
        "birthdate": [
            dt.date(1997, 1, 10),
            dt.date(1985, 2, 15),
            dt.date(1983, 3, 22),
            dt.date(1981, 4, 30),
        ],
        "weight": [57.9, 72.5, 53.6, 83.1],  # (kg)
        "height": [1.56, 1.77, 1.65, 1.75],  # (m)
    }
)

out.write(bytes(f"{df}", encoding='utf-8'))
out.flush()

while True:
    sleep(1)
