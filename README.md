# CollegeNotify — College Notice System

## Project Structure

```
src/
├── index.js                  ← React entry point
├── index.css                 ← Global reset
├── App.js                    ← Root component — screen router (no nav bar)
├── App.css                   ← All shared styles + CSS variables + responsive
│
├── components/               ← REUSABLE UI COMPONENTS (Assignment 9 focus)
│   ├── Button.jsx            ← Props: label, variant, size, disabled, fullWidth, icon
│   ├── InputField.jsx        ← Props: label, type, error, hint, disabled, required
│   ├── Card.jsx              ← Props: title, subtitle, hoverable, onClick, padding
│   ├── Badge.jsx             ← Props: label, variant (urgent/exam/event/holiday/placement)
│   ├── Modal.jsx             ← Props: isOpen, onClose, title, footer, size
│   ├── Sidebar.jsx           ← Role-aware navigation sidebar
│   ├── TopBar.jsx            ← Top header with title + avatar
│   └── NoticeRow.jsx         ← Notice row (uses Badge internally)
│
├── data/
│   └── notices.js            ← Mock data shared across screens
│
└── screens/
    ├── Login.jsx             ← Uses: Button, InputField (3 button states shown)
    ├── Dashboard.jsx         ← Uses: Card, Button, NoticeRow
    ├── CreateNotice.jsx      ← Uses: Card, Button, InputField
    ├── NoticeList.jsx        ← Uses: NoticeRow (with Badge inside)
    ├── NoticeDetail.jsx      ← Uses: Card, Button, Badge, Modal
    ├── Notifications.jsx     ← Uses: Button
    ├── Profile.jsx           ← Uses: Card, Button, Badge, NoticeRow
    └── Settings.jsx          ← Uses: Card, Button, Modal, InputField
```

---

## Reusable Components — Props Reference

### Button
| Prop | Type | Values | Default |
|------|------|--------|---------|
| label | string | any | — |
| variant | string | primary / secondary / danger / ghost / success | primary |
| size | string | sm / md / lg | md |
| disabled | boolean | true / false | false |
| fullWidth | boolean | true / false | false |
| icon | string | emoji | null |
| type | string | button / submit / reset | button |

### InputField
| Prop | Type | Description |
|------|------|-------------|
| label | string | Field label |
| type | string | text / email / password / date |
| error | string | Red border + message when set |
| hint | string | Grey helper text below field |
| disabled | boolean | Greyed-out non-editable state |

### Badge
| Prop | Values |
|------|--------|
| variant | urgent / exam / event / holiday / placement / info / success / neutral |

### Modal
| Prop | Description |
|------|-------------|
| isOpen | Controls visibility |
| onClose | Close handler (also fires on Escape key + backdrop click) |
| size | sm (400px) / md (520px) / lg (680px) |
| footer | JSX for action buttons |

### Card
| Prop | Description |
|------|-------------|
| title | Optional heading |
| subtitle | Optional subtext |
| hoverable | Adds blue border on hover |
| onClick | Makes card clickable |

---

## Login Button States (Assignment 9 Demonstration)

| State | Condition | Button Appearance |
|-------|-----------|-------------------|
| Empty | Both fields blank | Primary blue (opacity 0.6) |
| Typing | Fields have input, not valid | Primary blue (full opacity) |
| Valid | Valid email + 4+ char password | Green (success variant) |
| Error | Submit with invalid input | InputField shows red error message |

---

## Team

| Name | PRN |
|------|-----|
| Khush Paliwal | 123B1B208 |
| Paritosh Nimhan | 123B1B212 |
| Sneha Nalawade | 124B2B022 |
