---
name: trip-yaml-builder
description: >
  Interactively builds a trip YAML file for this trip-itinerary-app.
  Interviews the user via AskUserQuestion to gather trip details, then
  generates a valid YAML file in src/data/trips/ and runs the build script.
  Use when the user wants to add or document a trip.
---

# Trip YAML Builder

## Purpose

Guide the user through creating a valid trip YAML file via AskUserQuestion,
write it to `src/data/trips/`, then run `npm run build:trips` to regenerate
`trips.js`.

## Project Context

- **YAML source dir:** `src/data/trips/`
- **Build command:** `npm run build:trips`
- **Only strictly required fields:** `id` and `title` (build script validates these)
- **Two trip types** with different fields — see below

---

## Step 1: Determine Trip Type

Ask via AskUserQuestion in one batch:

1. "Is this a **past trip** you're documenting, or a **future/planned trip**?"
   - Options: "Past trip (already happened)", "Future/planned trip"
2. "What's the **destination**?" (free text)
3. "What's the **trip title**?" (short, punchy — e.g. "Rock Climbing Through France")

---

## Step 2a: Past Trip Interview

Past trips are personal narratives with real photos and per-day dates.
Gather in batches of 2–4 questions.

**Batch 1 — Core info:**
- Start date and end date (YYYY-MM-DD)
- How many days / nights?
- How many people went?
- Activity level: Easy / Moderate / Challenging / Active
- Interest tags (e.g. "History, Culture & Food", "Adventure & Nature")

**Batch 2 — Branding:**
- Subtitle (1 sentence capturing the vibe)
- Hero image — local path like `/photos/trip-name/hero.jpg` or URL
- Price paid per person (optional; use 0 if not relevant)

**Batch 3+ — Itinerary (iterate day by day or in groups):**

For each day ask:
- Day number and actual date (YYYY-MM-DD)
- Day title
- Description (narrative; first person is fine)
- Image paths/URLs (can be multiple — use `images:` array)
- Accommodation (optional)
- Meals (optional)
- Any notable location for the map? If yes, get `locationName` + approximate lat/lng

Continue until user confirms all days are covered.

---

## Step 2b: Planned Trip Interview

Planned trips are showcase/marketing content. Gather in batches.

**Batch 1 — Core logistics:**
- Proposed start date and end date (YYYY-MM-DD)
- Duration in days/nights
- Price per person (amount + currency, e.g. 4825 USD)
- Activity level: Easy / Moderate / Challenging / Active
- Group size
- Interest tags

**Batch 2 — Marketing content:**
- Subtitle (engaging 1-sentence hook)
- Hero image URL
- Trip description (2–4 sentences, optional top-level field)
- 5–8 highlight bullet points (what makes this trip special?)
- What's included (accommodations, meals, transport, entry fees, etc.)
- What's NOT included (flights, travel insurance, visas, extra meals, etc.)

**Batch 3 — Logistics:**
- Arrival airport (code + name)
- Recommended arrival time (e.g. "Day 1 before 4:00 PM")
- Recommended departure time (e.g. "Day 10 after 10:00 AM")
- Arrival/departure notes
- Deposit amount (or "TBD") + currency
- Balance due how many days before departure (e.g. 90)
- Activity/walking notes (miles per day, accessibility)
- Solo traveler options? (private room available? supplement cost?)
- Contact phone and/or email (optional)
- Essential info URL / FAQ URL (optional)

**Batch 4+ — Itinerary (iterate per day or in groups):**

For each day:
- Day number + title
- Description
- Image URL (use `https://placehold.co/800x800` if no real image yet)
- Image alt text
- Meals included (Breakfast / Lunch / Dinner)
- Accommodation (hotel name + city, append "or similar" for flexibility)
- Location coordinates [longitude, latitude] + locationName (for map pin — optional)
- Notable activities list (optional)
- Activity URLs (optional)

---

## Step 3: Generate the ID

Derive `id` from destination + year (kebab-case):
- `egypt-2027`, `france-rockclimbing-2024`, `new-zealand-adventure-2023`

Filename: `{id}.yaml`

Confirm with the user if the ID is ambiguous.

---

## Step 4: Write the YAML

### Past Trip Template

```yaml
id: {id}
title: '{title}'
subtitle: {subtitle}
destination: {destination}

duration:
  days: {days}
  nights: {nights}

price:
  amount: {amount}
  currency: USD

heroImage: {heroImage}

gallery:
  - {gallery_image_1}

itinerary:
  - day: 1
    title: {day_title}
    description: >
      {description}
    date: {YYYY-MM-DD}
    images:
      - {image_path}
    accommodation: {accommodation}        # omit if none
    accommodationUrl: {url}               # omit if none
    meals:
      - Breakfast                         # omit if none
    location: [-73.5674, 45.5019]        # [longitude, latitude] — omit if unknown
    locationName: Montreal, Canada        # omit if none

dates:
  - startDate: {YYYY-MM-DD}
    endDate: {YYYY-MM-DD}
    price: {amount}
    available: false

activity: {activity_level}
groupSize: {groupSize}
interest:
  - {interest_tags}
```

### Planned Trip Template

```yaml
id: {id}
status: planning
title: '{title}'
subtitle: {subtitle}
destination: {destination}
description: >                            # optional — shown in overview
  {trip_description}

duration:
  days: {days}
  nights: {nights}

price:
  amount: {amount}
  currency: {currency}

heroImage: {heroImage}

gallery:
  - https://placehold.co/800x800

highlights:
  - {highlight_1}
  - {highlight_2}

included:
  - Accommodations throughout the trip
  - Most meals (as described in the itinerary)
  - Transportation (as described in the itinerary)
  - Admission/entry to activities
  - Special access to places and experiences

notIncluded:
  - Flights to and from destination
  - Pre/Post trip accommodations
  - Travel insurance
  - Visas and passport fees
  - Meals outside of those described

itinerary:
  - day: 1
    title: {title}
    description: >
      {description}
    image: https://placehold.co/800x800
    imageAlt: {imageAlt}
    meals:
      - Dinner
    accommodation: {Hotel Name or similar}, {City}
    accommodationUrl: {booking_url}       # omit if none
    activities:                           # omit if none
      - {activity_description}
    activityUrls:                         # omit if none (parallel array indexed by activity)
      - {activity_url}
    location: [-73.5674, 45.5019]        # [longitude, latitude] — omit if unknown
    locationName: Montreal, Canada        # omit if none

dates:
  - startDate: {YYYY-MM-DD}
    endDate: {YYYY-MM-DD}
    price: {amount}
    available: true

activity: {activity_level}
groupSize: {groupSize}
interest:
  - {interest_tags}

additionalInfo:
  pricing:
    deposit: {deposit_or_TBD}
    depositCurrency: {currency}
    balanceDueDays: {days}
    notes: The price of the trip is per person based on double occupancy.
    fullDetails: Learn more about our pricing and payment plans...

  soloTraveler:                           # omit entire section if N/A
    notes: Solo travelers are welcome.
    privateRoomAvailable: true
    privateRoomFee: {fee}
    privateRoomCurrency: {currency}
    fullDetails: Learn more about solo traveler options...

  arrivalDeparture:
    airport:
      code: {AIRPORT_CODE}
      name: {Airport Full Name}
    recommendedArrival: Day 1 before {time}
    recommendedDeparture: Day {last_day} after {time}
    notes: {brief airport/transit note}
    fullDetails: Detailed arrival and departure information...

  activityLevel:
    level: {activity_level}
    walkingDistance:
      min: {min}
      max: {max}
      unit: miles
    notes: >
      {activity level description with walking distance context}
    fullDetails: Complete details about physical requirements and accessibility...

  essentialInfo:                          # omit if no URLs yet
    tripInfoUrl: {url}
    faqUrl: {url}

  contact:
    phone: {phone}                        # omit if none
    email: {email}                        # omit if none
```

---

## Step 5: Confirm and Write

Before writing, show the user a quick summary:
- Filename: `src/data/trips/{id}.yaml`
- Trip type (past/planned)
- Key fields: title, destination, dates, # of itinerary days

Ask: "Does this look right, or anything to change before I write the file?"

Then:
1. Write the YAML to `src/data/trips/{id}.yaml`
2. Run `npm run build:trips` from the project root
3. Report success (e.g. "✅ Built 8 trips from YAML files")

---

## Field Reference: Complete Schema

### Required
| Field | Notes |
|-------|-------|
| `id` | Unique kebab-case string |
| `title` | Full trip title |

### Common (both trip types)
| Field | Notes |
|-------|-------|
| `subtitle` | 1-sentence description |
| `destination` | Destination name |
| `duration.days` / `.nights` | Numbers |
| `price.amount` / `.currency` | Per person, currency string |
| `heroImage` | URL or local path |
| `gallery` | Array of image URLs |
| `itinerary` | Array of day objects |
| `dates` | Array with startDate, endDate, price, available |
| `activity` | "Easy" / "Moderate" / "Challenging" / "Active" |
| `groupSize` | Number |
| `interest` | Array of tag strings |

### Planned trips only
| Field | Notes |
|-------|-------|
| `status` | `"planning"` |
| `description` | Multi-sentence trip overview |
| `highlights` | Array of bullet strings |
| `included` | Array of included items |
| `notIncluded` | Array of excluded items |
| `additionalInfo.pricing` | deposit, balanceDueDays, notes, fullDetails |
| `additionalInfo.soloTraveler` | privateRoomAvailable, privateRoomFee, etc. |
| `additionalInfo.arrivalDeparture` | airport, recommendedArrival, recommendedDeparture, notes |
| `additionalInfo.activityLevel` | level, walkingDistance, notes |
| `additionalInfo.essentialInfo` | tripInfoUrl, faqUrl |
| `additionalInfo.contact` | phone, email |

### Day-level fields
| Field | Notes |
|-------|-------|
| `day` | Day number (integer) |
| `date` | ISO date string YYYY-MM-DD |
| `title` | Day title |
| `description` | Narrative (use `>` block scalar if long) |
| `image` | Single image URL (planned trips) |
| `images` | Array of image URLs (past trips with multiple photos) |
| `imageAlt` | Alt text string |
| `accommodation` | Hotel/place name string |
| `accommodationUrl` | Booking/info URL (optional) |
| `meals` | Array: "Breakfast", "Lunch", "Dinner" |
| `mealUrls` | Parallel array of URLs for meal links (optional) |
| `activities` | Array of activity description strings (optional) |
| `activityUrls` | Parallel array of URLs for activities (optional) |
| `location` | `[longitude, latitude]` for map pin (optional) |
| `locationName` | Human-readable location name for map (optional) |
| `iconIndex` | Object mapping category to icon name — rarely needed manually |
| `routeOverride` | Array of coordinate pairs overriding map route for this day |

### Trip-level map field
| Field | Notes |
|-------|-------|
| `routeOverride` | Array of `[lng, lat]` pairs for custom map route |

### Fields in YAML but not rendered by current code (harmless, kept for future use)
- `price.amount` / `price.currency` (top level)
- `dates[].endDate`, `dates[].price`
- `additionalInfo.arrivalDeparture.airport.code` / `.name`
- `additionalInfo.activityLevel.level`, `.walkingDistance`

---

## Key Rules

- **Never hallucinate details** — omit fields you don't have values for, or use `https://placehold.co/800x800` for placeholder images
- **Past trips** use `images:` (array) per day; planned trips use `image:` (single string)
- **Past trips** omit `status`, `highlights`, `included`, `notIncluded`, `additionalInfo`
- For descriptions longer than ~1 line, use YAML block scalar `>` (folds newlines into spaces)
- `interest:` is an array but typically contains one string: `- History, Culture & Food`
- Past trips set `available: false` in the dates array
- The `id` must be unique — if unsure, check `src/data/trips/` for existing files
