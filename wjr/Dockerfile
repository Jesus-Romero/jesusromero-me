FROM tiangolo/uwsgi-nginx-flask:python2.7

COPY requirements.txt /tmp/
COPY . .
WORKDIR /app

RUN pip install -U pip
Run pip install -r /tmp/requirements.txt
ENTRYPOINT ["python","app/main.py"]
