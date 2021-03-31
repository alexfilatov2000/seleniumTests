pipeline {
    agent {
        docker {
            image 'node:6-alpine'
            args '-p 3000:3000'
        }
    }

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