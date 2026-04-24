# 1. create cluster

kind create cluster --config ./ops/clusters.yml

# 2. create namespace

kubectl create ns todo-app-backend

# 3. apply configmaps and secrets

kubectl apply -f ./ops/configmap.yml
kubectl apply -f ./ops/secret.yml

# 4. deploy

kubectl apply -f deployment.yml
