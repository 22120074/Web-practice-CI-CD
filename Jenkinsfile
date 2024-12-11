pipeline {
    agent any

    environment {
        IMAGE_NAME = "whoami0709/jenkins-demo"
        BUILD_NUMBER = "${BUILD_NUMBER}"
    }

    stages {
        stage('Pull latest code from Github') {
            steps {
                echo 'Pulling latest code from Github..'
                git branch: 'main', credentialsId: 'github-token', url: 'https://github.com/22120074/Web-practice-CI-CD.git'
            }
        }

        stage('Build and push Docker image') {
            steps {
                echo 'Building and pushing Docker image..'
                withDockerRegistry(credentialsId: 'docker-hub', url: 'https://index.docker.io/v1/') {
                    bat'''
                        docker build -t %IMAGE_NAME%:%BUILD_NUMBER% .
                        docker push %IMAGE_NAME%:%BUILD_NUMBER%
                    '''
                }                   
            }
        }

        stage('Deploy to Docker container') {
            steps {
                echo 'Removing existing Docker container with same name..'
                bat 'docker rm -f jenkins-demo || true'
                echo 'Deploying to Docker container..'
                bat 'docker run -d -p 8000:8000 --name jenkins-demo %IMAGE_NAME%:%BUILD_NUMBER%'
            }
        }
    }
}