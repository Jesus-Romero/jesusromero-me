FROM tiangolo/uwsgi-nginx-flask:python3.6

COPY requirements.txt /tmp/
COPY . .
WORKDIR /app

RUN pip install -U pip
Run pip install -r /tmp/requirements.txt
ENTRYPOINT ["python3","app/main.py"]
