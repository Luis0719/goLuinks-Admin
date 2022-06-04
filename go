VM_NAME=httpserver
SITE_DIR="/usr/src/sites/goluinks-admin"

function zipbuild {
  echo "***** Compressing build files *****"
  zip -r build build/*
}

function build {
  echo "***** Build project *****"
  set PUBLIC_URL=/goluinks && yarn build
}

function cleanupBuild {
  echo "***** Cleaning up build bundle *****"
  rm build.zip
}

function buildToGcp {
  echo "***** Sending files to GCP *****"
  # Create backup.
  #TODO create different backupts per run but create mechanism to remove old ones so we don't end up with a ton of files
  gcloud compute ssh $VM_NAME --command="cd $SITE_DIR && zip -r ../goluinks-admin_backup * && rm -rf *"

  gcloud compute scp build.zip luisayala@$VM_NAME:$SITE_DIR
  gcloud compute ssh $VM_NAME --command="cd $SITE_DIR && unzip -uo build.zip && mv build/* . && rmdir build && rm build.zip"
}

function deploy {
  build
  zipbuild
  buildToGcp
  cleanupBuild
}


case $1 in
  build) build
  ;;
  deploy) deploy
  ;;
  deployOnly) buildToGcp
  ;;
esac