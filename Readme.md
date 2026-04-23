# 1. create cluster

kind create cluster --config clusters.yml

# 2. install ingress

kubectl apply -f <https://raw.githubusercontent.com/kubernetes/ingress-nginx/main/deploy/static/provider/kind/deploy.yaml>

# 3. wait

kubectl get pods -n ingress-nginx

# 4. create namespace

kubectl create ns backend-team

# 5. deploy nginx

kubectl apply -f deployment.yml

# 6. services

kubectl apply -f frontend-service.yml
kubectl apply -f backend-service.yml

# 7. ingress

kubectl apply -f ingress.yml

# 8. edit /etc/hosts file if you want to hit a domain locally, add these

127.0.0.1 myapp.local
127.0.0.1 api.myapp.local

# 9. expose ingress

kubectl port-forward -n ingress-nginx svc/ingress-nginx-controller 8080:80

# 10. now access on

<http://myapp.local:8080>
<http://api.myapp.local:8080>
