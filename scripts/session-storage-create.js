const { default: axios } = require("axios");
const fs = require("fs");
const authData = require("./config.json");

async function main() {
  const res = await axios.post(
    "https://be-pos.ducanhzed.com/auth/login",
    authData
  );

  const token = res?.data?.data?.token;
  if (!token) throw new Error("INVALID CREDENTIAL");

  //   await fs.mkdirSync('./auth/session-storage.json')
  await fs.writeFileSync(
    "./.auth/session-storage.json",
    JSON.stringify({
      access_token: token,
    })
  );

  console.log('Session storage auth data has been created at ./.auth/session-storage.json !')
}

main();
