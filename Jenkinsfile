pipeline {
  agent {
    node {
      label 'master'
    }

  }
  stages {
    stage('deploy') {
      agent {
        node {
          label 'master'
        }

      }
      environment {
        PROJECT_HOME = '/opt/projects/calculator'
      }
      steps {
        sh '''npm i
ng build --prod
rm -rf $PROJECT_HOME/*
mv dist/calculator/* $PROJECT_HOME'''
      }
    }
  }
}