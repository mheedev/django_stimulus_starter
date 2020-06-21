# Django Stimulus Starter

## Setup

Clone the repo using your project name

```bash
git clone mheedev/django_stimulus_starter projectname
```

Install dependencies:
```bash
cd projectname
poetry install
```

Populate the `SECRET_KEY` in settings.py

To generate a key using the same mechanism as Django:
```bash
poetry run python3 -c 'from django.core.management.utils import get_random_secret_key; print(get_random_secret_key())'
```

Install NPM dependencies:

```bash
cd django_stimulus_starter
npm install
```

## Run the project

In two separate terminal tabs run the following:

```bash
poetry run python3 manage.py runserver
```

and in another tab:

```bash
npm run dev
```

---

Copyright &copy; 2020 Ricardo van Hoepen