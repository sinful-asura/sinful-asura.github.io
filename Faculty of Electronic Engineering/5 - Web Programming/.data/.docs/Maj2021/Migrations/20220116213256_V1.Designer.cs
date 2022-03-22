﻿// <auto-generated />
using System;
using Maj2021.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace Maj2021.Migrations
{
    [DbContext(typeof(Context))]
    [Migration("20220116213256_V1")]
    partial class V1
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .UseIdentityColumns()
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("ProductVersion", "5.0.0");

            modelBuilder.Entity("Maj2021.Models.Fabrika", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .UseIdentityColumn();

                    b.Property<string>("Naziv")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("ID");

                    b.ToTable("Fabrike");
                });

            modelBuilder.Entity("Maj2021.Models.Silos", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .UseIdentityColumn();

                    b.Property<int?>("FabrikaID")
                        .HasColumnType("int");

                    b.Property<int>("Kapacitet")
                        .HasColumnType("int");

                    b.Property<string>("Oznaka")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("TrenutnaKolicina")
                        .HasColumnType("int");

                    b.HasKey("ID");

                    b.HasIndex("FabrikaID");

                    b.ToTable("Silosi");
                });

            modelBuilder.Entity("Maj2021.Models.Silos", b =>
                {
                    b.HasOne("Maj2021.Models.Fabrika", "Fabrika")
                        .WithMany("Silosi")
                        .HasForeignKey("FabrikaID");

                    b.Navigation("Fabrika");
                });

            modelBuilder.Entity("Maj2021.Models.Fabrika", b =>
                {
                    b.Navigation("Silosi");
                });
#pragma warning restore 612, 618
        }
    }
}
