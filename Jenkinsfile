pipeline {
    agent any

    tools {nodejs "nodejs"}

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