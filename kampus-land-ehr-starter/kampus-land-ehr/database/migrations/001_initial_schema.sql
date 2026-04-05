-- Apply this if you want raw SQL in addition to Prisma-managed migrations.
-- The fuller schema is in the companion schema document you already asked for.
-- This repo uses Prisma as the main migration path.
--CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- =========================
-- ORGANIZATION / USERS
-- =========================

CREATE TABLE organizations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE roles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL
);

CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  org_id UUID REFERENCES organizations(id),
  email TEXT UNIQUE NOT NULL,
  password_hash TEXT,
  first_name TEXT,
  last_name TEXT,
  role_id UUID REFERENCES roles(id),
  is_active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP DEFAULT NOW()
);

-- =========================
-- FACILITIES / PROGRAMS
-- =========================

CREATE TABLE facilities (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  org_id UUID REFERENCES organizations(id),
  name TEXT,
  address TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE programs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  facility_id UUID REFERENCES facilities(id),
  name TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

-- =========================
-- PATIENTS
-- =========================

CREATE TABLE patients (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  org_id UUID REFERENCES organizations(id),
  first_name TEXT,
  last_name TEXT,
  dob DATE,
  gender TEXT,
  phone TEXT,
  email TEXT,
  address TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE emergency_contacts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  patient_id UUID REFERENCES patients(id),
  name TEXT,
  relationship TEXT,
  phone TEXT
);

CREATE TABLE diagnoses (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  patient_id UUID REFERENCES patients(id),
  code TEXT,
  description TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

-- =========================
-- INSURANCE / AUTH
-- =========================

CREATE TABLE insurance_policies (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  patient_id UUID REFERENCES patients(id),
  payer_name TEXT,
  policy_number TEXT,
  group_number TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE authorizations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  patient_id UUID REFERENCES patients(id),
  service_code TEXT,
  units_authorized INT,
  units_used INT DEFAULT 0,
  start_date DATE,
  end_date DATE
);

-- =========================
-- SCHEDULING
-- =========================

CREATE TABLE appointments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  patient_id UUID REFERENCES patients(id),
  provider_id UUID REFERENCES users(id),
  facility_id UUID REFERENCES facilities(id),
  program_id UUID REFERENCES programs(id),
  start_time TIMESTAMP,
  end_time TIMESTAMP,
  status TEXT, -- scheduled, checked_in, completed, no_show, canceled
  created_at TIMESTAMP DEFAULT NOW()
);

-- =========================
-- ENCOUNTERS / NOTES
-- =========================

CREATE TABLE encounters (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  appointment_id UUID REFERENCES appointments(id),
  patient_id UUID REFERENCES patients(id),
  provider_id UUID REFERENCES users(id),
  service_code TEXT,
  units INT,
  status TEXT, -- pending, signed, billed
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE note_templates (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT,
  content TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE notes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  encounter_id UUID REFERENCES encounters(id),
  template_id UUID REFERENCES note_templates(id),
  content TEXT,
  signed_by UUID REFERENCES users(id),
  signed_at TIMESTAMP,
  created_at TIMESTAMP DEFAULT NOW()
);

-- =========================
-- TREATMENT PLANS
-- =========================

CREATE TABLE treatment_plans (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  patient_id UUID REFERENCES patients(id),
  created_by UUID REFERENCES users(id),
  start_date DATE,
  end_date DATE,
  goals TEXT,
  status TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

-- =========================
-- TASKS / WORK QUEUE
-- =========================

CREATE TABLE tasks (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id),
  patient_id UUID REFERENCES patients(id),
  type TEXT,
  description TEXT,
  due_date TIMESTAMP,
  completed BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT NOW()
);

-- =========================
-- BILLING (MVP LEVEL)
-- =========================

CREATE TABLE claims (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  encounter_id UUID REFERENCES encounters(id),
  status TEXT,
  submitted_at TIMESTAMP,
  paid_at TIMESTAMP,
  amount NUMERIC
);

-- =========================
-- FILES / AUDIT
-- =========================

CREATE TABLE attachments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  patient_id UUID REFERENCES patients(id),
  file_url TEXT,
  uploaded_by UUID REFERENCES users(id),
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE audit_logs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id),
  action TEXT,
  entity TEXT,
  entity_id UUID,
  created_at TIMESTAMP DEFAULT NOW()
);

SELECT * FROM patients;