FROM tiangolo/uwsgi-nginx-flask:python3.6

COPY requirements.txt /tmp/
COPY ./wjr/public /wjr/public
COPY ./wjr/static /wjr/static

RUN pip install -U pip
Run pip install -r /tmp/requirements.txt

COPY ./app /app
