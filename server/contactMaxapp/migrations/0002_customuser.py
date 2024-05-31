# Generated by Django 5.0.6 on 2024-05-29 13:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('contactMaxapp', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='CustomUser',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('password', models.CharField(max_length=128, verbose_name='password')),
                ('last_login', models.DateTimeField(blank=True, null=True, verbose_name='last login')),
                ('firstname', models.CharField(max_length=50)),
                ('lastname', models.CharField(max_length=50)),
                ('email', models.EmailField(max_length=50, unique=True)),
                ('is_active', models.BooleanField(verbose_name=True)),
            ],
            options={
                'abstract': False,
            },
        ),
    ]