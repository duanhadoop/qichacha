// http://www.httpdaili.com/api.asp?ddbh=57729626221522367&old=&noinfo=true&sl=100

var a = '93.179.231.56:53281 83.147.231.124:65103 103.56.207.25:3128 144.0.242.194:808 27.9.209.137:8998 190.200.124.186:8080 110.73.7.42:8123 83.147.229.63:65103 138.219.35.187:3128 218.57.147.145:80 42.81.87.17:8080 183.64.111.243:80 42.81.87.15:8080 42.81.87.16:8080 177.89.182.131:8080 114.215.102.168:8081 141.196.83.56:8080 110.187.30.165:8998 122.96.118.13:8998 39.67.217.124:8998 182.120.196.53:8998 114.87.82.35:8123 182.129.232.238:8123 179.246.175.254:8080 124.32.141.184:3128 103.248.248.235:53281 121.12.122.203:8080 177.45.9.154:53281 187.110.212.1:53281 118.97.29.203:8080 36.73.88.14:8080 121.12.123.11:8080 42.81.87.14:8080 202.85.213.220:3128 119.177.15.75:80 125.253.32.158:3128 61.160.208.222:8080 124.47.7.45:80 42.81.87.18:8080 42.81.87.12:8080 121.12.122.202:8080 106.186.22.65:8888 182.253.38.186:8080 182.16.60.233:3128 103.24.150.242:65103 24.51.36.62:65103 62.68.246.27:8080 36.67.193.170:8080 197.32.124.13:8080 119.2.47.30:8080 31.192.225.22:8080 115.85.78.133:8080 160.226.215.140:8080 58.251.234.139:9797 45.6.67.37:65309 180.241.129.201:8080 72.43.103.98:8080 158.69.87.247:3128 200.43.113.158:8080 165.16.3.84:53281 184.105.50.217:53281 103.9.115.225:3128 149.172.246.81:3128 123.126.24.14:63909 122.228.179.178:80 170.84.51.74:53281 115.77.191.180:53281 103.50.214.210:80 103.67.198.228:53281 128.199.190.130:8080 123.139.56.238:9999 65.24.236.159:80 186.88.109.101:8080 177.54.121.148:8080 182.253.40.138:8080 185.127.211.27:8080 179.124.132.126:3128 113.87.163.75:808 94.9.233.0:8080 113.53.60.50:8080 112.25.9.181:80 58.20.31.93:8088 221.11.156.178:9000 45.76.160.54:3128 35.186.146.165:8080 184.95.48.110:3128 218.244.142.198:80 14.207.35.186:3128 128.199.219.154:8080 61.164.250.23:80 118.123.113.24:8080 144.48.29.30:8080 107.178.4.109:8080 119.147.118.204:8080 210.76.62.153:8080 117.156.53.146:8080 219.149.46.151:3128 121.40.108.76:80 103.56.233.147:80 117.158.3.151:3128';
b = a.split(' ')
c = b.map(item => {
  let port = item.split(':')[1],
    host = item.split(':')[0];
  return {
    host,
    port,
    status: 0
  }
})
d = c.map(item => `('${item.host}','${item.port}',${item.status})`);

console.log('insert into proxy_list_taobao(host,port,status) values ' + d.join(','));
