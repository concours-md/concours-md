# Concours.md - Lebanese University CSVT QBank

A QBank and exam simulator for Lebanese University first-year CSVT students preparing for the Concours entrance exam.

## Tech Stack

- **Frontend**: Plain HTML/CSS/JS (static files)
- **Backend**: Appwrite (Auth + Database)
- **Deployment**: GitHub → Appwrite Sites

## File Structure

```
index.html              Login page
signup.html             Signup with language selection
forgot-password.html    Password reset request
reset-password.html     Set new password
dashboard.html          Main app/dashboard
test.html               Test interface (MCQ exam)
import.html             Admin question importer
privacy.html            Privacy policy
terms.html              Terms of service
style.css               Main stylesheet
appwrite.js             Appwrite client config
auth.js                 Auth & database helpers
```

## Appwrite Settings

### Sites Configuration

```
Framework: Other
Install command: (empty)
Output directory: dist
Fallback file: index.html
```

### Build Command

```bash
rm -rf dist && mkdir -p dist /mnt/code && cp -f index.html signup.html dashboard.html test.html forgot-password.html reset-password.html privacy.html terms.html import.html style.css appwrite.js auth.js dist/ && tar -czf /mnt/code/code.tar.gz -C dist . && ls -lh /mnt/code/code.tar.gz && ls -la dist
```

### Database Setup

**Database**: `concours_db`

**Collections** (max 6 attributes per collection):

#### `questions`
| Attribute | Type | Size |
|-----------|------|------|
| category | String | 50 |
| course | String | 500 |
| correct | String | 5 |
| en | String | 10000 |
| fr | String | 10000 |
| metadata | String | 1000 |

#### `tests`
| Attribute | Type | Size |
|-----------|------|------|
| userId | String | 50 |
| type | String | 20 |
| category | String | 50 |
| course | String | 50 |
| questions | String | 10000 |
| answers | String | 10000 |

#### `notebook`
| Attribute | Type | Size |
|-----------|------|------|
| userId | String | 50 |
| category | String | 50 |
| course | String | 50 |
| questionId | String | 50 |
| objective | String | 500 |
| explanation | String | 5000 |

#### `users`
| Attribute | Type | Size |
|-----------|------|------|
| userId | String | 50 |
| language | String | 10 |
| stats | String | 5000 |
| name | String | 100 |
| email | String | 255 |
| createdAt | String | 50 |

## Features

- Bilingual (English/French)
- Course-level practice
- Category-level practice
- Concours simulation (Medicine/Dentistry & Physics)
- MathJax equation support
- Timer with tutor mode
- Question navigator
- Mark questions for review
- Strikethrough wrong answers
- Post-test review with explanations

## Deployment

1. Push files to GitHub
2. Connect repo to Appwrite Sites
3. Use build command above
4. Deploy!
