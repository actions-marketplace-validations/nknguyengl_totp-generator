# totp-generator

[![Test](https://github.com/nknguyengl/totp-generator/workflows/Test/badge.svg)](https://github.com/nknguyengl/totp-generator/actions)
[![License: MIT](https://img.shields.io/github/license/nknguyengl/totp-generator?label=License)](LICENSE)

This action generates two factor auth codes for use in actions.

# Usage

The following example.

```yaml
steps:
- name: Generate auth code
  id: generate
  uses: nknguyengl/totp-generator@v1
  with:
    shared_secret: ${{ secrets.TOTP_KEY }}
  
- run: echo ${{ steps.generate.outputs.code }}
 ```
 
# Inputs

| name     | description    | required | default |
|----------|----------------|----------|---------|
| TOTP_KEY | Your TOTP key. | true     |         |

# Outputs

| name | description          |
|------|----------------------|
| code | Generated auth code. |
