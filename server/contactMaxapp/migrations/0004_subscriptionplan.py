# Generated by Django 5.0.6 on 2024-05-29 14:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('contactMaxapp', '0003_category'),
    ]

    operations = [
        migrations.CreateModel(
            name='SubscriptionPlan',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200)),
                ('numberofcontacts', models.IntegerField()),
            ],
        ),
    ]
