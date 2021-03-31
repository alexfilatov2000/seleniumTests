pipeline {
    agent any

    stages {
        stage('Build') {
             nodejs(nodeJSInstallationName: 'Node 6.x', configId: '<config-file-provider-id>') {
                  sh 'npm install'
            }
        }
        stage('Test') {
            steps {
                sh 'npm test'
            }
        }
    }
}