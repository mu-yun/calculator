pipeline {
  agent any
  stages {
    stage('Build') { 
      steps {
        sh 'npm i'
        sh 'ng build --prod'
      }
    }
    stage('Deploy') {
      environment {
        PROJECT_HOME = '/opt/projects/calculator'
      }
      steps {
        sh 'rm -rf $PROJECT_HOME/*'
        sh 'mv dist/calculator/* $PROJECT_HOME'
      }
    }
  }
}
