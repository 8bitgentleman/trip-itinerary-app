# Catalina & Ensenada Cruise — photo manifest

The photos for this trip live on **Trek → Journey #1**, hosted in Immich, and
can't be pulled programmatically (no public URL / file_path — only Immich
asset_ids). The cruise YAML (`src/data/trips/catalina-ensenada-cruise-2026.yaml`)
references the **stub filenames** below. To make the real photos show up:

1. In Immich, find each asset by its `asset_id` below.
2. Export / download it.
3. Save it into this folder using the matching **filename** (keep the `.jpg`
   extension, or update the YAML if you export a different format).

The real photos have now been exported from Immich into this folder. The table
below reflects the files actually present and referenced by the cruise YAML.

| Filename | Immich asset_id | Used by |
|----------|-----------------|---------|
| `hero.jpg` | `99524232` (journey cover) | heroImage |
| `day2-bainbridge-1.jpg` | `6405ffb8` | Day 2 — Bainbridge / Bloedel |
| `day2-bainbridge-2.jpg` | `9da29ba9` | Day 2 — Bainbridge / Bloedel |
| `day2-bainbridge-3.jpg` | `359d7d59` | Day 2 — Bainbridge / Bloedel + gallery |
| `day3-embark-1.jpg` | `859d6c1d` | Day 3 — LA World Cruise Center / embark |
| `day3-embark-2.jpg` | `b80cc3ba` | Day 3 — LA World Cruise Center / embark |
| `day5-avalon-1.jpg` | `1f575da2` | Day 5 — Avalon, Catalina + gallery |
| `day6-ensenada-1.jpg` | `7a788556` | Day 6 — Ensenada |
| `day6-ensenada-2.jpg` | `b9ead304` | Day 6 — Ensenada |

The `gallery` reuses `day5-avalon-1.jpg` and `day2-bainbridge-3.jpg` (no
gallery-specific photos were exported).

_Days 1, 4, and 7 (travel/at-sea days) intentionally have no photos._
