using Microsoft.EntityFrameworkCore.Migrations;

namespace April2020.Migrations
{
    public partial class V1 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Klubovi",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Naziv = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Klubovi", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "Police",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Oznaka = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    MaxDiskova = table.Column<int>(type: "int", nullable: false),
                    TrenutnoDiskova = table.Column<int>(type: "int", nullable: false),
                    VideoKlubID = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Police", x => x.ID);
                    table.ForeignKey(
                        name: "FK_Police_Klubovi_VideoKlubID",
                        column: x => x.VideoKlubID,
                        principalTable: "Klubovi",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Police_VideoKlubID",
                table: "Police",
                column: "VideoKlubID");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Police");

            migrationBuilder.DropTable(
                name: "Klubovi");
        }
    }
}
