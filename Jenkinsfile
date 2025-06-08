pipeline {
    agent any
    stages {
        stage('Clone') {
            steps {
                git branch: 'develop', url: 'https://github.com/tattu2705/havest-box.git'
            }
        }
        stage('Clone stage') {
            steps {
                // This step should not normally be used in your script. Consult the inline help for details.
                withDockerRegistry(credentialsId: 'docker', url: 'https://index.docker.io/v1/') {
                    sh 'docker build -t jospephng/tt2705 .'
                    sh 'docker push jospephng/tt2705 .'
                }
            }
        }
    }
}