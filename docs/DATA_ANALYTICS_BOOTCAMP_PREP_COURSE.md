# Data Analytics Bootcamp Prep Course

Created: 2026-07-02
Restructured: 2026-07-03

Purpose: prepare for the data analytics syllabus while building enough Python and pandas fluency to keep up in class.

This is not a general Python course. It is a practical data analytics readiness course.

## Operating Principle

The course is now structured as learning blocks, not days.

A block is a unit of skill. It ends when the learner can perform the core moves cold on a new dataset, not when a calendar day ends.

Phil may complete one block in a few hours, or several blocks in one long study day. The 8-hour study capacity should be used through depth, repetition, dataset rotation, refresh checks, and plain-English findings, not through thin overviews.

## The Syllabus We Are Preparing For

From the course outline:

- Foundations of data analytics
- Essential tools and Python programming
- Jupyter Notebooks
- Numerical computing and data collection
- Data cleaning, missing values, and outliers
- Visualisation
- ETL and hackathon work
- Statistics, probability, hypothesis testing, and statistical analysis
- Exploratory data analysis
- Dashboarding
- Machine learning, predictive analytics, and model evaluation
- Neural networks
- K-Means clustering and real-world case studies
- Ethics, projects, and presentations

## Non-Negotiable Teaching Pattern

Every concept inside every teaching block must use this four-part sequence:

1. Explain the concept in plain English. What it is, why it exists, and what problem it solves. No code yet.
2. Show a worked example as a real executed code cell with visible output stored
   in the notebook.
3. Ask a specific question immediately above the learner's empty cell. The question must name the dataset and the column or operation.
4. Provide an empty code cell. No pre-filled hints.

Each concept is taught once on one lesson dataset per block. Dummy worked examples use a neutral domain unrelated to the lesson data. The refresh check uses a separate dataset not used during the block.

## Refresh Checks

At the end of each of Blocks 1 through 8, before moving to the next block, the
learner completes a refresh check.

The refresh check must:

- use a dataset not used during the block itself
- include only the core moves from the completed block
- provide no worked examples
- ask three to five specific questions using the moves just learned
- provide empty code cells only
- end with a plain-English findings note about what the data showed

The refresh check is capped at 45 minutes. If it runs over, stop anyway.
Incomplete is acceptable. Skipped is not.

Blocks 9 and 10 are capstones, so they do not have separate refresh checks.
Block 9 is verified by the completed ETL artifacts from both runs. Block 10 is
verified by its three KPI charts, findings report, and verbal summary. These
completion artifacts are the retrieval and transfer check for each capstone.

## Dataset Pool

Shared dataset folder:

- `datasets/`

Project dataset folder:

- `datasets/`

Current datasets:

- `iris.csv` - clean, small table for first pandas work and repeated inspection.
- `titanic.csv` - mixed real-world passenger data with missing values and categorical columns.
- `superstore_sales.csv` - larger transaction-style sales data with dates, categories, quantities, and financial columns.
- `seattle_weather.csv` - numeric-heavy weather data for refresh checks, visualisation, and statistics.
- `dirty_data.csv` - deliberately messy data for cleaning and ETL repetition.

## Artifact Locations

Primary live notebook folder:

- `Live_Jupyter_Notebooks/`

Project copy folder:

- `project root/`

User-facing notes and references must also be copied to the shared folder when created.

## Block 1 - Table Literacy

Absorbs the former Lesson 1 and Lesson 2 work.

Core moves:

- `pd.read_csv()`
- `df.head()`
- `df.shape`
- `df.info()`
- `df.describe(include="all")`
- `df.dtypes`
- single-column selection: `df["column"]`
- multi-column selection: `df[["col1", "col2"]]`
- basic value counts: `df["column"].value_counts()`

Each concept is taught once on one lesson dataset per block. Dummy worked examples use a neutral domain unrelated to the lesson data. The refresh check uses a separate dataset not used during the block.

Completion standard:

- The learner can load any CSV cold.
- The learner can inspect table shape, columns, types, missingness, and summaries.
- The learner can select one or more columns.
- The learner can count basic category values.
- The learner can produce a plain-English map of what each table contains.

Findings artifact:

- Three plain-English observations per dataset.
- Nine observations total.

Active artifacts:

- `block_01_table_literacy.ipynb`
- `refresh_block_01.ipynb`

## Block 2 - Selection and Filtering

Core moves:

- single-condition filter: `df[df["column"] == value]`
- negative filter: `df[df["column"] != value]`
- numeric filter: `df[df["column"] > value]`
- two-condition filter with `&`
- two-condition filter with `|`
- inner/outer bracket logic explained with colour coding

Use this exact HTML in notebook markdown cells:

```html
<p><span style="color:#d97706;font-weight:600;">Outer layer</span> - df[...] keeps the rows that pass.</p>
<p><span style="color:#1f4f82;font-weight:600;">Inner layer</span> - df["column"] == value asks the question.</p>
<p><span style="color:#4d6b4f;font-weight:600;">Inner-inner layer</span> - df["column"] reaches into the column before the comparison.</p>
```

Each concept is taught once on one lesson dataset per block. Dummy worked examples use a neutral domain unrelated to the lesson data. The refresh check uses a separate dataset not used during the block.

## Block 3 - Missing Data and Cleaning

Core moves:

- `df.isnull().sum()`
- `df.dropna()`
- `df.fillna()`
- preserving originals before changes
- saving a cleaned CSV

Each concept is taught once on one lesson dataset per block. Dummy worked examples use a neutral domain unrelated to the lesson data. The refresh check uses a separate dataset not used during the block.

## Block 4 - Grouping and Insight

Core moves:

- `df.sort_values()`
- `df["column"].value_counts()`
- `df.groupby("column")["column"].mean()`
- `df.groupby("column")["column"].count()`
- `df.groupby("column").agg()`

Every groupby result must be followed by a plain-English sentence saying what the data shows.

Each concept is taught once on one lesson dataset per block. Dummy worked examples use a neutral domain unrelated to the lesson data. The refresh check uses a separate dataset not used during the block.

## Block 5 - Visualisation

Core moves:

- bar chart
- histogram
- scatter plot
- writing what a chart shows and what it cannot show

For every chart, the learner must write one sentence saying what the chart shows and one sentence saying what the chart cannot tell from that view alone.

Each concept is taught once on one lesson dataset per block. Dummy worked examples use a neutral domain unrelated to the lesson data. The refresh check uses a separate dataset not used during the block.

## Block 6 - Statistics Foundations

Core moves:

- mean, median, mode
- standard deviation
- distribution shape
- sample vs population distinction

Concept explanation comes before any code. No formula is introduced without a plain-English account of what it measures and why that matters.

Each concept is taught once on one lesson dataset per block. Dummy worked examples use a neutral domain unrelated to the lesson data. The refresh check uses a separate dataset not used during the block.

## Block 7 - Hypothesis and Evidence

Concepts:

- null hypothesis
- alternative hypothesis
- p-value as evidence, not a verdict
- statistical significance vs practical importance

The learner must state the null and alternative hypothesis for a simple real-data question before any p-value is introduced.

## Block 8 - Full EDA Cycle

No teaching cells. No worked examples. No prompting.

The learner loads an unseen dataset and runs a complete EDA using every move from Blocks 1 through 5 without assistance.

The artifact is the findings note, not the notebook.

Findings note must answer:

- what does this data contain?
- what stands out?
- what would you check next?
- what can you not conclude from this data alone?

## Block 9 - ETL Drill

Load, clean, transform, save, explain.

Run twice on different datasets. The second run is timed. The learner sets a timer and stops when it expires whether finished or not.

## Block 10 - Dashboard and Presentation

The learner chooses three KPIs from a real dataset.

Artifacts:

- one chart per KPI
- one findings report in plain English
- one short verbal summary prepared and delivered aloud
