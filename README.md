# Background
Simple expressjs app running in docker

# Docker Commands
```
docker build -t njcaruso/ctr-test-expressjs:1.0.0 .
docker push njcaruso/ctr-test-expressjs:1.0.0
docker run -d -p 80:3000 njcaruso/ctr-test-expressjs:1.0.0
```