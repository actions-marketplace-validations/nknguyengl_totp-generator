const core = require('@actions/core');
const totp = require('totp-generator');

function run()
{
    try
    {
        const key = core.getInput('totp_key', { required: true });

        if(key.length === 0)
        {
            throw Error('Invalid shared secret.');
        }

        const code = totp(key);

        core.setSecret(code);
        core.setOutput('code', code);
    }
    catch (error)
    {
        core.setFailed(error);
    }
}

run();
