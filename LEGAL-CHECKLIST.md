# LEGAL & REGULATORY COMPLIANCE CHECKLIST

**Jurisdiction:** City of Temecula, Riverside County, California, & United States Federal Law  
**Entity:** J&B Junk Removal  
**Effective Date:** March 2026  

---

## 1. Compliance Matrix

| Regulatory Area | Applicable Law / Regulation | Implementation Status | Technical & Content Evidence | Outstanding Business Action | Attorney Review Needed? |
|---|---|---|---|---|---|
| **Online Privacy** | California Online Privacy Protection Act (CalOPPA) | **Implemented** | Conspicuous Privacy Policy link in footer; clear disclosure of PII collected via quote form; effective date published. | Maintain business contact email for inquiries. | No (Standard) |
| **Consumer Privacy** | CCPA as amended by CPRA (Cal. Civ. Code § 1798.100) | **Implemented** | No sale or sharing of PII; notice at collection on `/get-a-quote`; consumer rights disclosure; retention disclosures. | Verify if business exceeds $25M revenue / 100k consumer threshold. | Yes (If revenue grows) |
| **Privacy Signal** | Global Privacy Control (GPC) / Cal. Regs. Title 11 § 7025 | **Implemented** | Automated GPC detection in `CookieBanner.tsx` (`navigator.globalPrivacyControl`). Silently disables optional scripts. | None (Automated). | No |
| **Web Accessibility** | ADA Title III & California Unruh Civil Rights Act (Civ. Code § 51) | **Implemented** | WCAG 2.2 AA compliant tokens, skip links, semantic landmarks, accessible form errors, keyboard navigation. | Periodically audit customer-uploaded assets. | Yes (Routine audit) |
| **Telephone / SMS** | Telephone Consumer Protection Act (TCPA) & FCC 10DLC Rules | **Implemented** | Form disclosure states submitted phone is used strictly for requested quote dispatch, not unsolicited mass marketing. | Register brand with A2P 10DLC campaign registry for SMS dispatch. | Yes (Before SMS automation) |
| **Truth in Advertising** | FTC Act § 5 & Cal. Bus. & Prof. Code § 17500 (False Advertising) | **Implemented** | No fabricated customer reviews, no fake license claims, upfront volume load tiers clearly explained as estimates. | Replace `[PLACEHOLDER]` business registration with final legal entity name. | No |
| **Municipal Licensing** | City of Temecula Municipal Code Title 5 | **Disclosed with Placeholder** | Operating disclaimer notes Temecula business tax compliance and mobile service model. | Obtain official City of Temecula Business License from City Hall Permit Center. | Yes (Standard licensing) |
| **Solid Waste Franchise** | Assembly Bill 2048 & Temecula Solid Waste Franchise (CR&R) | **Compliant** | Distinction maintained between residential junk/debris hauling and municipal franchised trash collection. | Ensure vehicle loads do not interfere with CR&R franchised curbside bins. | No |
| **Hazardous Waste** | Cal. Health & Safety Code § 25100 & Riverside County Waste Rules | **Disclosed & Enforced** | Prominent warnings on `/services`, `/faq`, and `/terms-and-conditions` excluding liquid paint, chemicals, oils, batteries, propane, and asbestos. | Refer customers with hazardous materials to Riverside County HHW (rcwaste.org). | No |
| **Vehicle Safety & Tarping** | California Vehicle Code § 23114 (Freeboard & Spillage Prevention) | **Compliant** | Operational terms emphasize covered loads and safe transport within Temecula city limits. | Ensure all hauling trucks carry heavy-duty tie-down tarps and safety equipment. | No |

---

## 2. Key California Operational Distinctions

1. **Ordinary Junk vs. Hazardous Waste:**
   - Commercial junk haulers in Riverside County are authorized for non-hazardous solid waste, furniture, scrap metal, clean lumber, and brush.
   - Hazardous waste (paints, solvents, motor oils, pool chemicals, pesticides) must NEVER be transported without a California Department of Toxic Substances Control (DTSC) hazardous waste transporter registration and manifest. The website explicitly informs customers of this restriction and directs them to Riverside County HHW events.
2. **Estimates vs. Binding Quotes:**
   - Under California consumer protection standards, preliminary estimates over the phone or web must not be deceptive. The website makes it clear that initial estimates are volume guides, and firm binding pricing is confirmed on-site before lifting begins.
