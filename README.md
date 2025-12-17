<!-- Hero Section -->
<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=0,2,8,12,16&height=280&section=header&text=🏥%20SUS%20Survey&fontSize=80&fontColor=fff&animation=fadeIn&fontAlignY=40"/>

<img src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&weight=600&size=28&duration=4000&pause=1000&color=009639&center=true&vCenter=true&repeat=true&width=900&height=100&lines=Patient+Satisfaction+Survey+Form+📋;Brazilian+Public+Health+System+🏥;User-Friendly+%26+Accessible+Design+♿;LGPD+Compliant+Data+Collection+🔒" alt="Typing SVG" />

<br><br>

![Status](https://img.shields.io/badge/Status-Production_Ready-success?style=for-the-badge&logo=statuspage)
![Size](https://img.shields.io/badge/Size-11KB-blue?style=for-the-badge&logo=files)
![HTML5](https://img.shields.io/badge/HTML5-Semantic-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-Modern-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

<br>

**Patient satisfaction survey form for Brazil's Unified Health System (SUS)**

[🎯 About](#-about) • [✨ Features](#-features) • [🛠️ Technologies](#️-technologies) • [🚀 Quick Start](#-quick-start)

</div>

---

<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif">

<!-- About -->
## 🎯 **About**

<table>
<tr>
<td width="60%">

### 🏥 **The Project**

A **patient satisfaction survey form** designed for Brazil's Unified Health System (SUS) with a **welcoming design** and **humanized language**.

The goal is to collect patient feedback about the care received at health facilities, enabling **continuous improvement** of healthcare services.

**Key Focus:**
- Patient-centric design
- Accessible interface
- LGPD compliance (Brazilian data protection law)
- Mobile-first approach
- Comprehensive validation

</td>
<td width="40%">

<img src="https://media.giphy.com/media/l378BzHA5FwWfXVsg/giphy.gif" width="100%">

</td>
</tr>
</table>

<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif">

<!-- Features -->
## ✨ **Features**

<div align="center">

### **4-Step Survey System**

```mermaid
graph LR
    A[📝 Step 1<br/>Personal Data] -->|Next| B[⭐ Step 2<br/>Service Rating]
    B -->|Next| C[🏢 Step 3<br/>Infrastructure]
    C -->|Next| D[💬 Step 4<br/>Final Comments]
    D -->|Submit| E[✅ Success]
    
    style A fill:#009639,stroke:#007A2D,color:#fff
    style B fill:#4169E1,stroke:#1E3A8A,color:#fff
    style C fill:#F59E0B,stroke:#D97706,color:#fff
    style D fill:#8B5CF6,stroke:#6D28D9,color:#fff
    style E fill:#10B981,stroke:#059669,color:#fff
```

</div>

### 📋 **Form Sections**

<table>
<tr>
<td width="50%">

#### **Step 1: Personal Data**
- 👤 Full name
- 🆔 CPF (with auto-formatting)
- 📞 Phone (with mask)
- 📧 Email (optional)
- 🏥 Health unit selection
- 📅 Appointment date

</td>
<td width="50%">

#### **Step 2: Service Rating**
- ⏰ Waiting time (visual cards)
- ⭐ Service quality (5-star rating)
- 😊 Staff professionalism (emoji scale)

</td>
</tr>
<tr>
<td width="50%">

#### **Step 3: Infrastructure**
- 🧹 Cleanliness & hygiene (1-10 scale)
- 🛋️ Facility comfort (1-10 scale)
- ✅ Available resources (checkboxes)

</td>
<td width="50%">

#### **Step 4: Final Comments**
- 💬 Free text feedback (1000 chars)
- 👍 Would recommend? (Yes/Maybe/No)
- 🔒 LGPD terms acceptance

</td>
</tr>
</table>

<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif">

<!-- Validation -->
## ✅ **Validation System**

<div align="center">

### **Comprehensive Field Validation**

<table>
<tr>
<th>Field</th>
<th>Validation Rules</th>
<th>User Feedback</th>
</tr>
<tr>
<td>👤 <b>Name</b></td>
<td>Required, min 3 characters</td>
<td>Real-time error messages</td>
</tr>
<tr>
<td>🆔 <b>CPF</b></td>
<td>Valid algorithm verification</td>
<td>Auto-formatting: 000.000.000-00</td>
</tr>
<tr>
<td>📞 <b>Phone</b></td>
<td>10-11 digits complete</td>
<td>Auto-mask: (00) 00000-0000</td>
</tr>
<tr>
<td>📧 <b>Email</b></td>
<td>Valid email format (regex)</td>
<td>Pattern validation</td>
</tr>
<tr>
<td>📅 <b>Date</b></td>
<td>Cannot be future date</td>
<td>Date range restriction</td>
</tr>
<tr>
<td>⭐ <b>Ratings</b></td>
<td>All ratings required</td>
<td>Visual selection feedback</td>
</tr>
<tr>
<td>🔒 <b>LGPD Terms</b></td>
<td>Must be accepted</td>
<td>Mandatory checkbox</td>
</tr>
</table>

</div>

### 🔍 **Validation Features**

<table>
<tr>
<td width="50%">

#### **Client-Side**
- ✅ Real-time field validation
- ✅ CPF verification algorithm
- ✅ Email regex pattern matching
- ✅ Date range checking
- ✅ Required field highlighting
- ✅ Custom error messages

</td>
<td width="50%">

#### **User Experience**
- 🎯 Visual feedback on errors
- 📝 Auto-formatting masks
- 🔄 Progressive disclosure
- ⚡ Instant validation
- 💬 Helpful error messages
- ✨ Success indicators

</td>
</tr>
</table>

<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif">

<!-- Technologies -->
## 🛠️ **Technologies**

<div align="center">

### **Pure Frontend Stack**

<table>
<tr>
<td align="center" width="33%">

### 📝 **Core**

![HTML5](https://skillicons.dev/icons?i=html)
![CSS3](https://skillicons.dev/icons?i=css)
![JavaScript](https://skillicons.dev/icons?i=js)

**HTML5 Semantic**  
**CSS3 Modern**  
**Vanilla JavaScript ES6+**

</td>
<td align="center" width="33%">

### 🎨 **CSS Features**

<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" width="80">

**CSS Variables**  
**Flexbox & Grid**  
**Responsive Design**  
**Animations**

</td>
<td align="center" width="33%">

### ⚡ **JS Features**

<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" width="80">

**Event Listeners**  
**DOM Manipulation**  
**Form Validation**  
**Regex Patterns**

</td>
</tr>
</table>

### 📦 **No Dependencies**

![Zero Dependencies](https://img.shields.io/badge/Dependencies-0-success?style=for-the-badge)
![Bundle Size](https://img.shields.io/badge/Bundle_Size-11KB-blue?style=for-the-badge)
![Pure JS](https://img.shields.io/badge/Vanilla_JavaScript-100%25-yellow?style=for-the-badge)

</div>

### 🎯 **Technical Highlights**

<table>
<tr>
<td width="50%">

#### **CSS Techniques**
- CSS Custom Properties (Variables)
- Flexbox for layouts
- Grid for responsive design
- Media queries for breakpoints
- Transitions & animations
- Pseudo-elements styling

</td>
<td width="50%">

#### **JavaScript Features**
- Arrow functions
- Template literals
- Array methods (map, filter)
- Regular expressions
- Event delegation
- Local storage (optional)

</td>
</tr>
</table>

<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif">


### 🎨 **Design System**

<div align="center">

| Element | Specification | Purpose |
|---------|--------------|---------|
| **Primary Color** | `#009639` | SUS official green |
| **Secondary Color** | `#0066CC` | Interactive elements |
| **Success** | `#10B981` | Positive feedback |
| **Error** | `#EF4444` | Validation errors |
| **Fonts** | Open Sans, Roboto | Readability |
| **Size** | 11KB compressed | Fast loading |

</div>

<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif">

<!-- Quick Start -->
## 🚀 **Quick Start**

<div align="center">

### **Deploy in 2 Steps**

</div>

<table>
<tr>
<td width="33%" align="center">

### 1️⃣ **Clone**

```bash
git clone https://github.com/
joaogalimberti/
sus-satisfaction-survey.git

cd sus-satisfaction-survey
```

<img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white" />

</td>

<td width="33%" align="center">

### 2️⃣ **Launch**

```bash
# Direct open
open index.html

# Or use server
python -m http.server
```

<img src="https://img.shields.io/badge/Live-Ready-blue?style=for-the-badge&logo=web" />

</td>
</tr>
</table>

### 🌐 **Deployment Options**

<div align="center">

| Platform | Setup | URL |
|----------|-------|-----|
| **GitHub Pages** | Push to `gh-pages` branch | `username.github.io/repo` |
| **Netlify** | Drag & drop folder | Auto-generated URL |
| **Vercel** | Connect GitHub repo | Auto-deployment |
| **Local Server** | `python -m http.server` | `localhost:8000` |

</div>

<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif">

<!-- User Experience -->
## 👥 **User Experience**

<div align="center">

### **Accessibility & Usability**

</div>

<table>
<tr>
<td width="50%">

### ♿ **Accessibility**

- 📱 **Mobile-First**: Optimized for smartphones
- ⌨️ **Keyboard Navigation**: Full support
- 🎯 **Focus Indicators**: Clear visual feedback
- 📖 **Semantic HTML**: Screen reader friendly
- 🔤 **Large Text**: Readable font sizes
- 🎨 **High Contrast**: WCAG compliant

</td>
<td width="50%">

### 🎨 **User Interface**

- 🌊 **Progress Steps**: Visual journey
- ✅ **Instant Validation**: Real-time feedback
- 😊 **Emoji Ratings**: Engaging interaction
- ⭐ **Star System**: Intuitive scoring
- 🎯 **Visual Cards**: Easy selection
- 📝 **Character Counter**: Text field guidance

</td>
</tr>
</table>

<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif">

<!-- LGPD Compliance -->
## 🔒 **LGPD Compliance**

<div align="center">

### **Data Protection & Privacy**

</div>

<table>
<tr>
<td width="50%">

### 📋 **Compliance Features**

- ✅ Explicit consent collection
- ✅ Clear data usage purpose
- ✅ Optional personal data fields
- ✅ Transparent processing information
- ✅ User rights notification
- ✅ Secure data handling

</td>
<td width="50%">

### 🛡️ **Security Measures**

- 🔐 Client-side only processing
- 📝 No automatic storage
- ✋ User consent required
- 🚫 No third-party tracking
- 📊 Minimal data collection
- 🔒 Privacy-first design

</td>
</tr>
</table>

<div align="center">

![LGPD](https://img.shields.io/badge/LGPD-Compliant-success?style=for-the-badge)
![Privacy](https://img.shields.io/badge/Privacy-First-blue?style=for-the-badge)

</div>

<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif">

<!-- Use Cases -->
## 💼 **Use Cases**

<div align="center">

### **Where This Form Can Be Applied**

</div>

<table>
<tr>
<td width="33%" align="center">

### 🏥 **Health Clinics**

Basic health units (UBS)  
Patient satisfaction tracking

</td>
<td width="33%" align="center">

### 🏨 **Hospitals**

Emergency rooms  
Specialized care feedback

</td>
<td width="33%" align="center">

### 💉 **Vaccination Centers**

Campaign evaluation  
Service improvement

</td>
</tr>
<tr>
<td width="33%" align="center">

### 👨‍⚕️ **Specialized Clinics**

Dental, physiotherapy  
Quality assessment

</td>
<td width="33%" align="center">

### 🚑 **Emergency Services**

SAMU, urgent care  
Response evaluation

</td>
<td width="33%" align="center">

### 📊 **Research**

Academic studies  
Service quality analysis

</td>
</tr>
</table>

<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif">

<!-- Contributing -->
## 🤝 **Contributing**

<div align="center">

**Help improve public healthcare feedback systems!**

</div>

<table>
<tr>
<td width="33%" align="center">

### 🐛 **Bug Reports**

Found an issue?  
Report it!

</td>
<td width="33%" align="center">

### 💡 **Suggestions**

Have ideas?  
Share them!

</td>
<td width="33%" align="center">

### 🔄 **Improvements**

Submit pull requests  
with enhancements

</td>
</tr>
</table>

<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif">

<!-- Contact -->
## 📬 **Contact**

<div align="center">

### **Let's Connect!**

[![Email](https://img.shields.io/badge/Email-joaogalimberti@gmail.com-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:joaogalimberti@gmail.com)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-João_Galimberti-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/joaogalimberti/)
[![GitHub](https://img.shields.io/badge/GitHub-joaogalimberti-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/joaogalimberti)

</div>

---

<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=0,2,8,12,16&height=150&section=footer"/>

<img src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&size=20&duration=3000&pause=1000&color=009639&center=true&vCenter=true&width=800&lines=🏥+Improving+public+healthcare+through+feedback;📋+LGPD+compliant+and+user-friendly;♿+Accessible+design+for+everyone" alt="Footer" />

**Developed with 💚 by [João Galimberti](https://github.com/joaogalimberti) | 2025**

*Making healthcare feedback accessible and effective*

</div>
