pipeline {
    agent any

    stages {
        stage('Build') {
            sh 'npm install'
        }
        stage('Test') {
            steps {
                sh 'npm test'
            }
        }
    }
}