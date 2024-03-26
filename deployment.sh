git pull;
pm2 stop product_app;
npm i ;
npm run build;
# pm2 start dist/main.js --name idm_app;
pm2 restart product_app;