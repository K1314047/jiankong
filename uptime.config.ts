const pageConfig = {
  // Title for your status page
  title: "G.Ark's Status Page",
  // Links shown at the header of your status page, could set `highlight` to `true`
  links: [
    { link: 'https://1314047.xyz', label: 'Home Page' },
    { link: 'https://blog.1314047.xyz', label: 'Blog', highlight: true },
    { link: 'https://x.com/ayig61', label: 'Twitter'},
    { link: 'https://github.com/K1314047', label: 'GitHub' }, 
  ],
}

const workerConfig = {
  // Write KV at most every 3 minutes unless the status changed
  kvWriteCooldownMinutes: 3,
  // Enable HTTP Basic auth for status page & API by uncommenting the line below, format `<USERNAME>:<PASSWORD>`
  // passwordProtection: 'username:password',
  // Define all your monitors here
  monitors: [
    // Example HTTP Monitor
    {
      // `id` should be unique, history will be kept if the `id` remains constant
      id: 'am.809098.xyz',
      // `name` is used at status page and callback message
      name: '博客',
      // `method` should be a valid HTTP Method
      method: 'GET',
      // `target` is a valid URL
      target: 'https://am.809098.xyz',
      // [OPTIONAL] `tooltip` is ONLY used at status page to show a tooltip
      tooltip: 'This is a tooltip for this monitor',
      // [OPTIONAL] `statusPageLink` is ONLY used for clickable link at status page
      statusPageLink: 'https://am.809098.xyz',
      // [OPTIONAL] `expectedCodes` is an array of acceptable HTTP response codes, if not specified, default to 2xx
      // expectedCodes: [200],
      // [OPTIONAL] `timeout` in millisecond, if not specified, default to 10000
      timeout: 10000,
      // [OPTIONAL] headers to be sent
      // headers: {
      //   'User-Agent': 'Uptimeflare',
      //   Authorization: 'Bearer YOUR_TOKEN_HERE',
      // },
      // [OPTIONAL] body to be sent
      // body: 'Hello, world!',
      // [OPTIONAL] if specified, the response must contains the keyword to be considered as operational.
      // responseKeyword: 'success',
      // [OPTIONAL] if specified, the check will run in your specified region,
      // refer to docs https://github.com/lyc8503/UptimeFlare/wiki/Geo-specific-checks-setup before setting this value
      // checkLocationWorkerRoute: 'https://am.809098.xyz',
    },
    // Example TCP Monitor
    {
      id: 'alpha.001100.best',
      name: 'G.Ark Docs',
      // `method` should be `TCP_PING` for tcp monitors
      method: 'GET',
      // `target` should be `host:port` for tcp monitors
      target: 'https://alpha.001100.best',
      timeout: 10000,
    },
   {
      id: 'new.1314047.xyz',
      name: 'Binance Alpha 查询',
      // `method` should be `TCP_PING` for tcp monitors
      method: 'GET',
      // `target` should be `host:port` for tcp monitors
      target: 'https:/new.1314047.xyz',
      timeout: 10000,
    },
   {
      id: 'blog.iove.eu.org',
      name: '技术博客分享',
      // `method` should be `TCP_PING` for tcp monitors
      method: 'GET',
      // `target` should be `host:port` for tcp monitors
      target: 'https://blog.iove.eu.org',
      timeout: 10000,
    },
    {
      id: 'duan.1314047.xyz',
      name: '短域名',
      // `method` should be `TCP_PING` for tcp monitors
      method: 'GET',
      // `target` should be `host:port` for tcp monitors
      target: 'https://duan.1314047.xyz',
      timeout: 10000,
    },
    {
      id: 'blog.1314047.xyz',
      name: 'Blog',
      // `method` should be `TCP_PING` for tcp monitors
      method: 'GET',
      // `target` should be `host:port` for tcp monitors
      target: 'https://blog.1314047.xyz',
      timeout: 10000,
    },
    {
      id: 'nav.1314047.xyz',
      name: '导航站',
      // `method` should be `TCP_PING` for tcp monitors
      method: 'GET',
      // `target` should be `host:port` for tcp monitors
      target: 'https://nav.1314047.xyz',
      timeout: 10000,
    },    
    {
      id: 'pyq.1314047.xyz',
      name: '朋友圈',
      // `method` should be `TCP_PING` for tcp monitors
      method: 'GET',
      // `target` should be `host:port` for tcp monitors
      target: 'https://pyq.1314047.xyz',
      timeout: 10000,
    },
    {
      id: 'https://www.1314047.xyz/suiji',
      name: '随机密码',
      // `method` should be `TCP_PING` for tcp monitors
      method: 'GET',
      // `target` should be `host:port` for tcp monitors
      target: 'https://www.1314047.xyz/suiji',
      timeout: 10000,
    }, 
    {
      id: 'https://cw.1314047.xyz/',
      name: '生活日常',
      // `method` should be `TCP_PING` for tcp monitors
      method: 'GET',
      // `target` should be `host:port` for tcp monitors
      target: 'https://cw.1314047.xyz/',
      timeout: 10000,
    }, 
    {
      id: 'https://cw.1314047.xyz/jiedian/',
      name: '节点列表',
      // `method` should be `TCP_PING` for tcp monitors
      method: 'GET',
      // `target` should be `host:port` for tcp monitors
      target: 'https://cw.1314047.xyz/jiedian/',
      timeout: 10000,
    }, 
    {
      id: 'https://cw.1314047.xyz/app/',
      name: '资源中心',
      // `method` should be `TCP_PING` for tcp monitors
      method: 'GET',
      // `target` should be `host:port` for tcp monitors
      target: 'https://cw.1314047.xyz/app/',
      timeout: 10000,
    },   
    {
      id: 'https://cw.1314047.xyz/ip/',
      name: 'IP查询',
      // `method` should be `TCP_PING` for tcp monitors
      method: 'GET',
      // `target` should be `host:port` for tcp monitors
      target: 'https://cw.1314047.xyz/ip/',
      timeout: 10000,
    },      
  ],
  notification: {
    // [Optional] apprise API server URL
    // if not specified, no notification will be sent
    appriseApiServer: "https://apprise.example.com/notify",
    // [Optional] recipient URL for apprise, refer to https://github.com/caronc/apprise
    // if not specified, no notification will be sent
    recipientUrl: "tgram://bottoken/ChatID",
    // [Optional] timezone used in notification messages, default to "Etc/GMT"
    timeZone: "Asia/Shanghai",
    // [Optional] grace period in minutes before sending a notification
    // notification will be sent only if the monitor is down for N continuous checks after the initial failure
    // if not specified, notification will be sent immediately
    gracePeriod: 5,
  },
  callbacks: {
    onStatusChange: async (
      env: any,
      monitor: any,
      isUp: boolean,
      timeIncidentStart: number,
      timeNow: number,
      reason: string
    ) => {
      // This callback will be called when there's a status change for any monitor
      // Write any Typescript code here

      // This will not follow the grace period settings and will be called immediately when the status changes
      // You need to handle the grace period manually if you want to implement it
    },
    onIncident: async (
      env: any,
      monitor: any,
      timeIncidentStart: number,
      timeNow: number,
      reason: string
    ) => {
      // This callback will be called EVERY 1 MINTUE if there's an on-going incident for any monitor
      // Write any Typescript code here
    },
  },
}

// Don't forget this, otherwise compilation fails.
export { pageConfig, workerConfig }
