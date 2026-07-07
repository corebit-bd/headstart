# 🔍 HeadStart CI / CD Troubleshooting Guide

This Guide provides Solutions for common Pipeline Failures specific to the HeadStart E-Platform. Given our "GOLD Approved" Status, all CI / CD Blocks must be resolved with a focus on Security & Data Integrity.

---

## 1. Security & Authentication Failures

### ❌ Issue : Profile Lock Mechanism Regression

The CI Pipeline fails during the `security-gate` Job because the **Profile Lock** did not trigger after exactly 2 Failed OTP / CAPTCHA Attempts.

**✅ Solution** : 

1. **Verify Logic** : Check `backend/apps/authentication/services.py` to ensure the attempt counter isn't being reset prematurely.

2. **Test Data** : Ensure the Playwright / Pytest Suite is using a unique `HS-STD` / `HS-ADM` Prefix for the Test User to trigger the correct Role-Based Lock Logic.

3. **Local Debug** : 

```bash
# Run only Security-Related tests
cd backend
pytest apps/authentication/tests/test_security_lock.py
```

### ❌ Issue : SASM (Single Active Session Management) Conflict

Multiple CI Runners attempting to use the same Test Credentials concurrently are being kicked out, causing intermittent **`401 Unauthorized`** Errors.

**✅ Solution** : 

- Ensure your Test Environment uses Isolated Session Tokens per Runner.

- In `ci.yaml`, verify that `REDIS_URL` is correctly partitioned / flushed between parallel Test Jobs to prevent Session Collisions.

---

## 2. Integration & Payment Failures

### ❌ Issue : SSL Commerz Handshake Timeout

The `integration-tests` fail during the Payment Simulation Phase with a **`ConnectionRefused`** / **`Timeout`** Error.

**✅ Solution** : 

1. **IP Whitelisting** : Ensure the CI Runner IP (if using self-hosted) / the Sandbox URL in `.env.test` is correctly configured for the SSL Commerz Sandbox Environment.

2. **Secrets Check** : Verify `SSLCOMMERZ_STORE_ID` & `SSLCOMMERZ_STORE_PASSWORD` are correctly set in GitHub Secrets.

3. **Log Review** : Check the `payment-gateway-logs` Artifact in GitHub Actions to see the exact HTTP Response Code from the Provider.

---

## 3. Deployment & Portal Siloing

### ❌ Issue : Administrator Portal Access Denied in Staging Environment

The ERP / CRM / SCM Modules are missing / returning **`403 Forbidden`** even though the Deployment succeeded.

**✅ Solution** : 

- **Role Verification** : HeadStart's Architecture silos these Modules strictly for Administrators. Verify that the user seed data in the `stagingEnv` Branch correctly assigns the `is_superuser` & `is_staff` Flags.

- **Migration Check** : Ensure the `data/` Branch Migrations for the ERP Module were successfully applied : 

```bash
docker-compose exec backend python manage.py showmigrations tenants
```

---

## 4. Pipeline Infrastructure (Cost & Cache)

### ❌ Issue : "Approaching Storage Limit" (10GB)

GitHub Actions warns that the HeadStart Repository is nearing its 10GB Cache Limit, which will slow down builds for the Academic & Advisory Wings.

**✅ Solution** : 

1. **Manual Eviction** : Go to `Actions` → `Caches` & delete Caches associated with old `feature/` / `fix/` Branches that have already been merged.

2. **Check Strategy** : Ensure `STRATEGY.md` Layered Caching is correctly implemented in your `ci.yaml` to prevent redundant `node_modules` Storage.

---

## 🆘 Still Having Issues?

1. **Check Workflow Logs** : Expand the Failed Job in the GitHub Actions Tab.

2. **Enable Debugging** : Add `ACTIONS_STEP_DEBUG: true` to your Repository Variables.

3. **Reach Out** : Post a Snippet in the [HeadStart GitHub Discussions](https://github.com/corebit-bd/headstart/discussions)

**Last Updated** : April 07, 2026<br />
**Platform Owner** : CoreBit Digital Lab