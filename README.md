# 💫 Portfolio Website: Cybersecurity Engineer & Defensive Architect

This is the source code for my professional portfolio, showcasing my expertise in **Security Automation Engineering**, **Digital Forensics and Incident Response (DFIR)** and building high-performance, defensible web applications. The site highlights projects designed to accelerate SOC triage and threat correlation.

## 🔗 Live Site

**View the live portfolio here:** [Your Live Portfolio URL]


## 🚀 Key Features & Defensive Branding

The portfolio is structured to immediately communicate my value in a security context.

* **Security-Focused Narrative:** Sections are rebranded to emphasize security skills:
    * **"About Me"** highlights specialization in **Defensive Architecture** and **AI Engineering for Cyber Security**.
    * **"Skills"** are categorized by security domain: **Security Automation**, **DFIR & Triage** and **Vulnerability Testing**.
    * **"Projects"** are presented as a **Threat Toolkit** (DFIR Analyzer, LogRecon, LogSentinel).
* **Engineering Proficiency:** The site utilizes modern, performant and secure development practices (React, Tailwind CSS, Node.js).
* **UI/UX:** Features a professional, dark-mode-first aesthetic with dynamic components designed for clarity and engagement.

## ⚙️ Technical Stack

| Category | Technologies Used | Rationale |
| :--- | :--- | :--- |
| **Frontend/UI** | **React.js, Tailwind CSS** | For a fast, responsive and component-driven user interface. |
| **Design System** | **Shadcn UI (Primitives)** | Used for accessible, modern component styling and utility. |
| **Deployment** | **Vercel / Netlify** | Serverless deployment for continuous integration and rapid scaling. |
| **Animations/Icons** | **Lucide-React** | Clean, minimalist icons for a professional look. |

## 📝 Usage & Local Setup

### Prerequisites

* **Node.js** (v18+)
* **npm** or **Yarn**

### Installation

1.  Clone the repository:
    ```bash
    git clone [Your GitHub URL]
    cd [Portfolio Repository Name]
    ```

2.  Install dependencies:
    ```bash
    npm install
    # or
    yarn install
    ```

3.  Run the application locally:
    ```bash
    npm run dev
    # or
    yarn dev
    ```
    The site will be available at `http://localhost:3000` (or similar).

### Contact Form Configuration (Backend)

The contact form requires setting up a server-side route (likely using Node.js/Express with Nodemailer).

1.  Set up environment variables in a **`.env`** file (add `.env` to `.gitignore`):
    ```
    # Credentials for the email account used to SEND mail
    EMAIL_USER="your_sending_email@example.com"
    EMAIL_PASS="your_application_specific_password"
    ```
2.  Ensure your server code correctly loads these variables (e.g., using `dotenv`) for secure authentication.

## 📧 Connect with Me

* **Email:** marthakamau0001@gmail.com